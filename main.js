console.log("main.js opened")

getArcherQuotes = function() {
	quoteFile = "/archerLines.txt"
	quoteCount = $(wc -l $quoteFile | awk '{print $1}')
	let randnum = $RANDOM % quoteCount
	console.log($(sed -n "$randnum, $randnum p" quoteFile))
}

/* setTimeout(getArcherQuotes, 0) */
