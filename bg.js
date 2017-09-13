chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
  var tab = sender.tab;
  var url = sender.url;
  if(url.includes('amazon') || url.includes('cart?') || url.includes('checkout')|| url.includes('payment')){
    var close = confirm('Hey! Remember your goal to save more and spend lesser?\nI\'m just here to remind you of your goals and keep you on track!\nMy system shows me that this page requires you to purchase something,\nIf this purchase is important, go ahead and confidently click the cancel button, if not, let me close the tab?\nRemember, $3 saved everyday is ~$50,000 in 25 years!');
    if(close) {
      chrome.tabs.remove(tab.id);
      chrome.tabs.create({url: 'save_more.html'});
    }
  }

});
