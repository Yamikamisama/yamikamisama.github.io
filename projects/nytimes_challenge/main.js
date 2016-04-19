var NYTD = {

  articleCollection: [],

  blogPostCollection: [],

  sanitizeData: function(JSON){
    var content = JSON.page.content;
    content.shift();
    content.forEach(function(object) {
      object.collections.forEach(function(list) {
        list.assets.forEach(function(article) {
          if (article.type === "Article") {
            article.images.length > 0 ? NYTD.articleCollection.unshift(article) : NYTD.articleCollection.push(article)
          } else if (article.type === "BlogPost") {
            article.images.length > 0 ? NYTD.blogPostCollection.unshift(article) : NYTD.blogPostCollection.push(article)
          }
        })
      })
    })
  },

  renderArticles: function(){
    var divs = document.getElementsByClassName('article-holder');
    for (var i = 0; i < divs.length; ++i) {
      var article = this.articleCollection[i]
      this.renderImageAndCredit(article, divs[i]);
      this.renderHeadline(article, divs[i]);
      this.renderSummary(article, divs[i]);
      this.renderByline(article, divs[i]);
    }
  },

  renderImageAndCredit: function(article, element){
    var imageAnchor = document.createElement('A');
    var image = document.createElement('IMG');
    var credit = document.createElement('P');
    if (article.images.length > 0) {
      imageAnchor.href = article.url
      image.src = "https://www.nytimes.com/" + article.images[0].types[0].content;
      image.setAttribute("class", "thumbnail");
      credit.innerHTML = article.images[0].credit;
      credit.setAttribute("class", "section-image-credit text-right");
    }
    element.appendChild(imageAnchor)
    imageAnchor.appendChild(image)
    element.appendChild(credit)
  },

  renderHeadline: function(article, element){
    var headlineAnchor = document.createElement('A');
    var headline = document.createElement('H4');
    headlineAnchor.href = article.url
    headline.innerHTML = article.headline;
    headline.setAttribute("class", "section-article-headline");
    element.appendChild(headlineAnchor)
    headlineAnchor.appendChild(headline)
  },

  renderSummary: function(article, element){
    var summary = document.createElement('H6');
    summary.innerHTML = article.summary;
    summary.setAttribute("class", "section-article-summary")
    element.appendChild(summary)
  },

  renderByline: function(article, element){
    var byline = document.createElement('P');
    var bylineDate = document.createElement('SPAN');
    var bylineDivider = document.createElement('SPAN');
    var bylineAuthor = document.createElement('SPAN');
    bylineDate.setAttribute("class", "byline-date text-left");
    bylineAuthor.setAttribute("class", "byline-author text-left");
    bylineDate.innerHTML = new Date(article.lastPublished.slice(0, 19)).toString().slice(4, 15);
    bylineAuthor.innerHTML = article.byline;
    bylineDivider.setAttribute("class", "divider")
    byline.setAttribute("class", "section-article-byline text-left");
    element.appendChild(byline)
    byline.appendChild(bylineDate)
    byline.appendChild(bylineDivider)
    byline.appendChild(bylineAuthor)
  },

  changeText:function(element){
    var element = element.split(" ")
    for(var i = 0; i < element.length; i++){
      if(element[i].length > 3){
        debugger
        element[i].charAt(0) === element[i].charAt(0).toUpperCase() ? element[i] = "Boinga" : element[i] = "boinga"
      }
    }
    return element.join(" ")
  },

  initChangeLanguageListener: function(){
    document.getElementById("martian-button").addEventListener("click", function(event){
      event.preventDefault();
      var currentLang = document.getElementById("martian-button").innerHTML
      var title = document.getElementById("title")
      var credits = document.getElementsByClassName("section-image-credit")
      var headlines = document.getElementsByClassName("section-article-headline")
      var summaries = document.getElementsByClassName("section-article-summary")
      var bylineDates = document.getElementsByClassName("byline-date")
      var bylineAuthors = document.getElementsByClassName("byline-author")
      var divs = document.getElementsByClassName('article-holder');
      if( currentLang === "Martian language"){
        document.getElementById("martian-button").innerHTML = "English language";
        title.innerText = NYTD.changeText(title.innerText)
        for (var i = 0; i < divs.length; i++) {
          headlines[i].innerText = NYTD.changeText(headlines[i].innerText)
          summaries[i].innerText = NYTD.changeText(summaries[i].innerText)
          bylineDates[i].innerText = NYTD.changeText(bylineDates[i].innerText)
          bylineAuthors[i].innerText = NYTD.changeText(bylineAuthors[i].innerText)
        }
      } else {
        document.getElementById("martian-button").innerHTML = "Martian language";
        title.innerText = "New York Times Coding Challenge";
        for (var i = 0; i < divs.length; i++) {
          headlines[i].innerHTML = NYTD.articleCollection[i].headline
          summaries[i].innerHTML = NYTD.articleCollection[i].summary
          bylineDates[i].innerHTML = new Date(NYTD.articleCollection[i].lastPublished.slice(0, 19)).toString().slice(4, 15);
          bylineAuthors[i].innerHTML = NYTD.articleCollection[i].byline
      }
    }
    });
  },

  render_section_front: function(JSON) {
    this.initChangeLanguageListener();
    this.sanitizeData(JSON);
    this.renderArticles();
  }
}