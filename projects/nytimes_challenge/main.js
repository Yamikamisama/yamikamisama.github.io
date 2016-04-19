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
  render_section_front: function(JSON) {
    this.sanitizeData(JSON)
    var divs = document.getElementsByClassName('article-holder');
    for (i = 0; i < divs.length; ++i) {
      var article = NYTD.articleCollection[i]
      var imageAnchor = document.createElement('A');
      var image = document.createElement('IMG');
      var credit = document.createElement('P');
      var headlineAnchor = document.createElement('A');
      var headline = document.createElement('H4');
      var summary = document.createElement('H6');
      var byline = document.createElement('P');
      var bylineDate = document.createElement('SPAN');
      var bylineDivider = document.createElement('SPAN');
      var bylineAuthor = document.createElement('SPAN');
      if (article.images.length > 0) {
        imageAnchor.href = article.url
        image.setAttribute("class", "thumbnail");
        image.src = "https://www.nytimes.com/" + article.images[0].types[0].content;
        credit.innerHTML = article.images[0].credit;
        credit.setAttribute("class", "section-image-credit text-right");
      }
      headlineAnchor.href = article.url
      headline.innerHTML = article.headline;
      headline.setAttribute("class", "section-article-headline");
      summary.innerHTML = article.summary;
      summary.setAttribute("class", "section-article-summary")
      bylineDate.innerHTML = new Date(article.lastPublished.slice(0, 19)).toString().slice(4, 15);
      bylineAuthor.innerHTML = article.byline;
      bylineDivider.setAttribute("class", "divider")
      byline.setAttribute("class", "section-article-byline text-left");
      divs[i].appendChild(imageAnchor)
      imageAnchor.appendChild(image)
      divs[i].appendChild(credit)
      divs[i].appendChild(headline)
      divs[i].appendChild(summary)
      divs[i].appendChild(byline)
      byline.appendChild(bylineDate)
      byline.appendChild(bylineDivider)
      byline.appendChild(bylineAuthor)
    }
  },
  renderImage: function(){

  },
  renderCredit: function(){

  },
  renderHeadline: function(){

  },
  renderSummary: function(){

  },
  renderByline: function(){

  },
  changeLanguage: function(){

  }
}