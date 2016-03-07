var revData = data;

var reviews = revData.reviewDetails.reviewCollection.review;
console.log(reviews.length);

var makeWordlist = function(array){
  // init storage object - word counts
  var words = [];
  var wordCounts = {};
  var largestCount = 0;
  var iterations = 5;
  // init results array
  var results = [];
  // iterate over array and add to word counts
  array.forEach(function(text){
    // exclude words <= 3 chars long
    var split = text.reviewText.match(/\w+/gi);
    words = words.concat(split);
  });
  words.forEach(function(word){
    if(word.length >= 6){
      wordCounts[word] = wordCounts[word] + 1 || 1;
    }
  });
  console.log("COUNTS: ", wordCounts);
  // iterate over storage object:
  for (var key in wordCounts){
    // find largest count
    if(wordCounts[key] > largestCount){
      largestCount = wordCounts[key];
    }
  }
  console.log("LARGEST: ", largestCount);

  for(var i = 6; i > 0; i--){
    for(var word in wordCounts){
      if(wordCounts[word] === largestCount){
        results.push([word, wordCounts[word]]);
      }
    }
    largestCount--;
  }

  console.log("RESULTS: ", results);
  return results;
}

makeWordlist(reviews);
