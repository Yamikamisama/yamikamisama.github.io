// New York Times Data Object
var NYTD = {

    articleCollection: [],

    blogPostCollection: [],

    // Sanitize data that is returned by the
    // JSONP request to the NYT
    sanitizeData: function(JSON) {
        var content = JSON.page.content;
        content.shift();
        content.forEach(function(object) {
            object.collections.forEach(function(list) {
                list.assets.forEach(function(article) {
                    if (article.type === "Article") {
                        article.images.length > 0 ? NYTD.articleCollection.unshift(article) : NYTD.articleCollection.push(article);
                    } else if (article.type === "BlogPost") {
                        article.images.length > 0 ? NYTD.blogPostCollection.unshift(article) : NYTD.blogPostCollection.push(article);
                    }
                });
            });
        });
    },

    // Creates the initial render of the articles
    renderArticles: function() {
        var divs = document.getElementsByClassName('article-holder');
        for (var i = 0; i < divs.length; ++i) {
            var article = this.articleCollection[i];
            this.renderImageAndCredit(article, divs[i]);
            this.renderHeadline(article, divs[i]);
            this.renderSummary(article, divs[i]);
            this.renderByline(article, divs[i]);
        }
    },

    // Renders Images from the Article
    // as well as the credit attacted to the image
    renderImageAndCredit: function(article, element) {
        var imageAnchor = document.createElement('A');
        var image = document.createElement('IMG');
        var credit = document.createElement('P');
        if (article.images.length > 0) {
            imageAnchor.href = article.url;
            image.src = "https://www.nytimes.com/" + article.images[0].types[0].content;
            image.setAttribute("class", "thumbnail");
            credit.innerHTML = article.images[0].credit;
            credit.setAttribute("class", "section-image-credit text-right");
        }
        element.appendChild(imageAnchor);
        imageAnchor.appendChild(image);
        element.appendChild(credit);
    },

    // Renders Headline from the Article
    renderHeadline: function(article, element) {
        var headlineAnchor = document.createElement('A');
        var headline = document.createElement('H4');
        headlineAnchor.href = article.url;
        headline.innerHTML = article.headline;
        headline.setAttribute("class", "section-article-headline");
        element.appendChild(headlineAnchor);
        headlineAnchor.appendChild(headline);
    },

    // Renders Summary from the Article
    renderSummary: function(article, element) {
        var summary = document.createElement('H6');
        summary.innerHTML = article.summary;
        summary.setAttribute("class", "section-article-summary");
        element.appendChild(summary);
    },

    // Renders Byline from the Article
    // Including the Date and Author
    renderByline: function(article, element) {
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
        element.appendChild(byline);
        byline.appendChild(bylineDate);
        byline.appendChild(bylineDivider);
        byline.appendChild(bylineAuthor);
    },

    // ChangeText() takes a string of words and changes them
    // to a the Martian Language :) fun!
    changeText: function(words) {
        var words = words.split(" ");
        for (var i = 0; i < words.length; i++) {
            if (words[i].length > 3) {
                words[i].charAt(0) === words[i].charAt(0).toUpperCase() ? words[i] = "Boinga" : words[i] = "boinga";
            }
        }
        return words.join(" ");
    },

    // Initializes the listener and the associated
    // changes that will happen when the button is clicked
    initChangeLanguageListener: function() {
        document.getElementById("martian-button").addEventListener("click", function(event) {
            event.preventDefault();
            var currentLang = document.getElementById("martian-button").innerHTML;
            var title = document.getElementById("title");
            var credits = document.getElementsByClassName("section-image-credit");
            var headlines = document.getElementsByClassName("section-article-headline");
            var summaries = document.getElementsByClassName("section-article-summary");
            var bylineDates = document.getElementsByClassName("byline-date");
            var bylineAuthors = document.getElementsByClassName("byline-author");
            var divs = document.getElementsByClassName('article-holder');
            if (currentLang === "Martian language") {
                document.getElementById("martian-button").innerHTML = "English language";
                title.innerText = NYTD.changeText(title.innerText)
                for (var i = 0; i < divs.length; i++) {
                    headlines[i].innerText = NYTD.changeText(headlines[i].innerText);
                    summaries[i].innerText = NYTD.changeText(summaries[i].innerText);
                    bylineDates[i].innerText = NYTD.changeText(bylineDates[i].innerText);
                    bylineAuthors[i].innerText = NYTD.changeText(bylineAuthors[i].innerText);
                }
            } else {
                document.getElementById("martian-button").innerHTML = "Martian language";
                title.innerText = "New York Times Coding Challenge";
                for (var i = 0; i < divs.length; i++) {
                    headlines[i].innerHTML = NYTD.articleCollection[i].headline;
                    summaries[i].innerHTML = NYTD.articleCollection[i].summary;
                    bylineDates[i].innerHTML = new Date(NYTD.articleCollection[i].lastPublished.slice(0, 19)).toString().slice(4, 15);
                    bylineAuthors[i].innerHTML = NYTD.articleCollection[i].byline;
                }
            }
        });
    },

    // This is the callback that the JSONP is looking for
    // when you make the request
    render_section_front: function(JSON) {
        this.initChangeLanguageListener();
        this.sanitizeData(JSON);
        this.renderArticles();
    }
}

// Vanilla JS JSONP Request
var scriptEl = document.createElement('script');
scriptEl.setAttribute('src','http://np-ec2-nytimes-com.s3.amazonaws.com/dev/test/nyregion.js');
document.body.appendChild(scriptEl);