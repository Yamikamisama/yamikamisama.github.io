//////////////////////////
///   Calendar Class   ///
//////////////////////////
var Calendar = function () {
  this.selectedDate = new Date();
  this.render = render;
  this.savedDate = null;
  this.changeDate = function(){};
  var el, tableEl, rowEl, cellEl, tagEl, tempDate, tempDate2, i, j;

  // Based on num either add or subtract a month
  function addMonths(event, num){
    this.selectedDate.addMonths(num);
    this.render();
  }

  // Change year when you go far enough to reach a new year
  function addYears(event, num){
    this.selectedDate.addYears(num);
    this.render();
  }

  // Reprint Calendar with new selected date
  function setSelectedDate(event, tag){
    console.log(event, tag)
    if(tag.date != null){
      this.selectedDate = new Date(Date.parse(tag.date));
      this.render()
    }
    setDisplayDate(tag);
  }

  // Sets date in left display box
  function setDisplayDate(tag){
    var displayDays, weekday, dateNum, displayDay, displayDateNum;

    displayDays = {"Sun":"Sunday", "Mon":"Monday", "Tue":"Tuesday", "Wed":"Wednesday", "Thu":"Thursday", "Fri":"Friday", "Sat":"Saturday"}
    weekday = tag.title.substring(0,3)
    dateNum = tag.innerHTML
    displayDay = document.getElementById('displayDay')
    displayDateNum = document.getElementById('displayDayNum')
    displayDay.innerHTML = displayDays[weekday]
    displayDateNum.innerHTML = dateNum
  }

  // Format date to something that JS understands MM/DD/YYYY
  function formatDate(){
    var month, day, year;

    month = String(this.selectedDate.getMonth() + 1);
    while (month.length < 2)
      month = "0" + month;
    day = String(this.selectedDate.getDate());
    while (day.length < 2)
      day = "0" + day;
    year = String(this.selectedDate.getFullYear());
    while (year.length < 4)
      year = "0" + year;

    return month + "/" + day + "/" + year;
  }


  ///////////////////////////
  ///   EVENT LISTENERS   ///
  ///////////////////////////

  // Right and Left keys change the current month
  document.onkeydown = checkKey;
  function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '37') {
     addMonths(event, -1);
   }
   else if (e.keyCode == '39') {
     addMonths(event, 1);
   }
  }

  // Click to change date (day or month)
  document.onclick = checkEvent;
  function checkEvent(e){
    e = e || window.event;
    if (e.srcElement.innerText == ">") {
      addMonths(event, 1)
    }
    else if (e.srcElement.innerText == "<") {
      addMonths(event, -1)
    }
    else if (e.srcElement.tagName == "A") {
      setSelectedDate(e, e.srcElement);
    }
    return false;
  }

  ////////////////////////////////////////////////////////
  ///   Prototype Functions Added to the Date Object   ///
  ////////////////////////////////////////////////////////

  Date.prototype.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  Date.prototype.findMonthName = function () {
    return this.monthNames[this.getMonth()];
  }

  Date.prototype.findDays = function () {
    var dateholder, day, month;

    dateholder = new Date(Date.parse(this));
    month      = dateholder.getMonth();
    day        = 28;
    do {
      day++;
      dateholder.setDate(day);
    } while (dateholder.getMonth() == month);
    return day - 1;
  }

  Date.prototype.addDays = function (num){
    this.setDate(this.getDate() + num);
    this.savedDate = this.getDate();
  }

  Date.prototype.addMonths = function (num){
    if (this.savedDate == null){this.savedDate = this.getDate()};
    this.setDate(1);
    this.setMonth(this.getMonth() + num);
    this.setDate(Math.min(this.savedDate, this.findDays()));
  }

  Date.prototype.addYears = function (num){
    if (this.savedDate == null){this.savedDate = this.getDate()};
    this.setDate(1);
    this.setFullYear(this.getFullYear() + num);
    this.setDate(Math.min(this.savedDate, this.findDays()));
  }

  function render(){
    document.body.style.display = 'none';
    el = document.getElementById('calendarHeader').firstChild;
    el.nodeValue = this.selectedDate.findMonthName() + "\u00a0" + this.selectedDate.getFullYear();

    tempDate = new Date(Date.parse(this.selectedDate));
    tempDate.setDate(1);
    while (tempDate.getDay() !=0 ) {
      tempDate.addDays(-1);
    }

    tableEl = document.getElementById('calendar');
    for (i=2;i<=7;i++){
      rowEl = tableEl.rows[i];
      tempDate2 = new Date(Date.parse(tempDate));
      tempDate2 .addDays(6);

      if (tempDate.getMonth() != this.selectedDate.getMonth() && tempDate2.getMonth() != this.selectedDate.getMonth()){
        rowEl.className = "empty";
      } else {
        rowEl.className = "";
      }

      for(j=0;j<rowEl.cells.length;j++){
        cellEl = rowEl.cells[j];
        tagEl = cellEl.firstChild;

        if (tempDate.getMonth() == this.selectedDate.getMonth()) {
          tagEl.date = new Date(Date.parse(tempDate));
          str = tempDate.toString().split(" ");
          tagEl.title = str[0] + " " + str[1] + " " + str[2] + " " + str[str.length - 1];
          tagEl.firstChild.nodeValue = tempDate.getDate();
          tagEl.style.visibility = "";
        } else {
          tagEl.style.visibility = "hidden";
        }

        if(cellEl.oldClass == null){cellEl.oldClass = cellEl.className};
        if(Date.parse(tempDate) == Date.parse((this.selectedDate))){
          setDisplayDate(tagEl)
          cellEl.className = cellEl.oldClass + "selected";
        } else {
          cellEl.className = cellEl.oldClass;
        }
        tempDate.addDays(1);
      }
    }
    document.body.style.display = "";

  }
  this.render();
}


///////////////////////////
///   Create Calendar   ///
///////////////////////////

// Create Calendar
var cal = Calendar();

