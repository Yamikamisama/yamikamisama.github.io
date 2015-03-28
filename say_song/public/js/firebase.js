$(document).ready(function() {

 var firebase = new Firebase("https://saysong.firebaseio.com");
      $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          firebase.push({name: name, text: text});
          $('#messageInput').val('');
        }
      });
      firebase.on('child_added', function(snapshot) {
        var message = snapshot.val();
displayChatMessage(message.name, message.text);
      });
      function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };


});