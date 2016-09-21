import moment from 'moment'

export const mousePosition = (e) => {
    let xPos,
        yPos
    e = e || window.event
    if (e.pageX) {
        xPos = e.pageX
        yPos = e.pageY
    } else {
        xPos = e.clientX + document.body.scrollLeft - document.body.clientLeft
        yPos = e.clientY + document.body.scrollTop - document.body.clientTop
    }
    return {x: xPos, y: yPos}
}

export const disableMouseDown = (e) => {
    let event = e || window.event
    event.preventDefault()
    event.stopPropagation()
}

export const getRotateStyle = (degree) => {
    return {'transform': `rotate(${degree}deg)`, 'OTransform': `rotate(${degree}deg)`, 'MozTransform': `rotate(${degree}deg)`, 'Mstransform': `rotate(${degree}deg)`, 'WebkitTransform': `rotate(${degree}deg)`}
}

export const getInlineRotateStyle = (degree) => {
    return {'transform': `translateX(-50%) rotate(${degree}deg)`, 'OTransform': `translateX(-50%) rotate(${degree}deg)`, 'MozTransform': `translateX(-50%) rotate(${degree}deg)`, 'Mstransform': `translateX(-50%) rotate(${degree}deg)`, 'WebkitTransform': `translateX(-50%) rotate(${degree}deg)`}
}

export const getInitialPointerStyle = (height, top, degree) => {
    return {
        'height': `${height}px`,
        'top': `${top}px`,
        'transform': `translateX(-50%) rotate(${degree}deg)`,
        'OTransform': `translateX(-50%) rotate(${degree}deg)`,
        'MozTransform': `translateX(-50%) rotate(${degree}deg)`,
        'Mstransform': `translateX(-50%) rotate(${degree}deg)`,
        'WebkitTransform': `translateX(-50%) rotate(${degree}deg)`
    }
}

export const getValidateIntTime = (time) => {
    if (isNaN(parseInt(time))) {
        return 0
    }
    return parseInt(time)
}

export const getValidateTime = (time) => {
    if (typeof time === 'undefined') {
        time = '00'
    }
    if (isNaN(parseInt(time))) {
        time = '00'
    }
    if (parseInt(time) < 10) {
        time = `0${parseInt(time)}`
    }
    return `${time}`
}

export const getStandardAbsolutePosition = (position, minPosition, maxPosition) => {
    if (position < minPosition) {
        position = minPosition
    }
    if (position > maxPosition) {
        position = maxPosition
    }
    return position
}

export const degree2Radian = (degree) => {
    return degree * (2 * Math.PI) / 360
}

export const initialTime = (defaultTime, mode = 24) => {
    let [hour,
        minute] = moment().format("HH:mm").split(':')
    if (defaultTime) {
        [hour, minute] = `${defaultTime}`.split(':')
    }
    hour = getValidateIntTime(hour)
    minute = getValidateIntTime(minute)
    if (hour > 24) {
        hour = 24 - hour
    }
    if (minute >= 60) {
        minute = 60 - minute
    }

    let timeInterval = null
    if (mode === 12) {
        timeInterval = hour > 12
            ? "PM"
            : "AM"
        hour = hour > 12
            ? hour - 12
            : hour
    }

    hour = getValidateTime(hour)
    minute = getValidateTime(minute)

    return [hour, minute, timeInterval]
}

export const getValidateTimeMode = (timeMode) => {
    let mode = parseInt(timeMode)
    if (isNaN(mode)) {
        return 24
    }
    if (mode !== 24 && mode !== 12) {
        return 24
    }
    return mode
}
