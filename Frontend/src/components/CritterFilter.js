class CritterFilter {
    constructor() {
    }

    donated_critters = []

    show_donated = false
    south_island = false

    available_critters(critter_array) {
        var new_critter_array = new Array()
        critter_array.map((critter)=>{
            if(!this.is_available_today(critter,'north'))
                return
            if(!this.is_available_now(critter, 'north'))
                return
            if(this.is_donated(critter) && !this.show_donated)
                return
            new_critter_array.push(critter)
        })
        return new_critter_array
    }

    is_donated(critter){
        if(this.donated_critters.includes(critter.Name))
            return true
        return false
    }

    is_available_now(critter) {
        if (critter.Time === "All day")
            return true
        var critterTime = critter.Time
        var currentDate = new Date()
        var currentHour = currentDate.getHours()
        if (critterTime.includes("&")) {
            var timeArray = critterTime.split("&")
            if (isInTimeRange(timeArray[0], currentHour) || isInTimeRange(timeArray[1], currentHour))
                return true
        } else {
            if (isInTimeRange(critterTime, currentHour))
                return true
        }
        return false
    }

    is_available_today(critter) {
        //First, we set the date based on island type since there are different dates for hemispheres
        var critterDate = critter.NorthMonths
        if (this.south_island)
            critterDate = critter.SouthMonths
        //If our critter's date is all year, it means it's going to be active today, so we can return true now without any other checks
        if (critterDate === "All year") {
            return true
        }
        //If the critter has a date range, we need the current date to see if it's active. These 2 variables hold the current date
        var currentDate = new Date()
        var currentMonth = currentDate.getMonth()
        //Some dates have the ; character which means there's two date sets. In this case, we must check both, but otherwise only need to check one
        if (critterDate.includes(';')) {
            //The date string is split at ';' so both dates can be checked
            var dateArray = critterDate.split(';')
            //If the current date is in either range, the function returns true as that critter is active today.
            if (isDateInRange(dateArray[0], currentMonth) || isDateInRange(dateArray[1], currentMonth))
                return true
        } else {
            //If there's one date, we simply check that one and if the current date is in that range, the function returns true.
            if (isDateInRange(critterDate, currentMonth))
                return true
        }
        return false
    }
}

//This function checks a date range and singular months to see if the current date is in that range or equal to the singular month. If true is returned, the critter is active today.
function isDateInRange(critterDate, currentMonth) {
    //If critter date contains '-' then it means it's a date range and two values need to be checked to see if the current date falls in the range.
    if (critterDate.includes('–')) {
        //The date string is split into an array to allow the checking of both months in the range as numbers.
        var dateArray = critterDate.split('–')
        //Using the date array data, the months are converted to number values to allow checking them against the current date.
        var dateNumArray = [monthToNum(dateArray[0]), monthToNum(dateArray[1])]
        //TODO: Find a good way to comment our methodology is these if conditions.
        if (dateNumArray[0] < dateNumArray[1]) {
            if (currentMonth <= dateNumArray[1] && currentMonth >= dateNumArray[0])
                return true
        }
        if (dateNumArray[0] > dateNumArray[1]) {
            if (currentMonth >= dateNumArray[0] || currentMonth <= dateNumArray[1])
                return true
        }
    }
    //If critter date doesn't contain '-' then it means the date is a single month, so the date is converted to a number and checked against the current date
    else {
        //If the month is equal to the current month, the critter is active today
        if (monthToNum(critterDate) === currentMonth)
            return true
    }
    return false
}

function isInTimeRange(timeRange, currentHour) {
    var timeArray = timeRange.split("–")
    var timeNumArray = [hourToNum(timeArray[0]), hourToNum(timeArray[1])]
    if (timeNumArray[0] < timeNumArray[1]) {
        if (timeNumArray[0] <= currentHour && timeNumArray[1] > currentHour)
            return true
    }
    if (timeNumArray[0] > timeNumArray[1]) {
        if (currentHour >= timeNumArray[0] || currentHour < timeNumArray[1])
            return true
    }
    return false
}

//This function formats 12hr times to 24hr times.
function hourToNum(hourStr) {
    if (hourStr.includes(" "))
        hourStr = hourStr.replace(" ", "")
    //12:00 in 12hr format converts messily to 24, so those two values are brute forced here.
    if (hourStr === "12AM")
        return 0
    if (hourStr === "12PM")
        return 12
    //To convert an AM time to 24hr, nothing needs to be done. The parsed string is returned.
    if (hourStr.includes("AM")) {
        hourStr = hourStr.replace("AM", "")
        return parseInt(hourStr)
        //To convert a PM time to 24hr, 12 hours are added to the time.
    } else if (hourStr.includes("PM")) {
        hourStr = hourStr.replace("PM", "")
        return parseInt(hourStr) + 12
    }
}

//This function returns a number representation of the abreviated month.
function monthToNum(monthStr) {
    //Remove any whitespace in the month string to prevent misreads.
    if (monthStr.includes(' '))
        monthStr = monthStr.replace(' ', '')
    switch (monthStr) {
        case "Jan":
            return 0
        case "Feb":
            return 1
        case "Mar":
            return 2
        case "Apr":
            return 3
        case "May":
            return 4
        case "Jun":
            return 5
        case "Jul":
            return 6
        case "Aug":
            return 7
        case "Sep":
            return 8
        case "Oct":
            return 9
        case "Nov":
            return 10
        case "Dec":
            return 11
    }
}

export default CritterFilter;