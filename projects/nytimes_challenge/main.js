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
    for (i = 0; i < divs.length; ++i) {
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
    element.appendChild(headline)
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
    for(i = 0; i < element.length; i++){
      element[i].length > 3 ? element[i] = "bazinga" : false
    }
  },

  initChangeLanguageListener: function(){
    document.getElementById("martian-button").addEventListener("click", function(event){
      event.preventDefault();
      var currentLang = document.getElementById("martian-button").innerHTML
      if( currentLang === "Martian language"){
        document.getElementById("martian-button").innerHTML = "English language";

      }
    });
  },

  render_section_front: function(JSON) {
    this.initChangeLanguageListener();
    this.sanitizeData(JSON);
    this.renderArticles();
  }
}