$(function(){

  function buildHTML(message){
    if ( message.image ) {
      console.log(message)
      let html =
        `<div class="Main__message-list--message" data-message-id=${message.id}>
          <div class="Main__message-list--message--info">
            <div class="Main__message-list--message--info--user">
              ${message.user_name}
            </div>
            <div class="Main__message-list--message--info--date">
              ${message.created_at}
            </div>
          </div>
          <div class="Main__message-list--message--text">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Main__message-list--message" data-message-id=${message.id}>
        <div class="Main__message-list--message--info">
          <div class="Main__message-list--message--info--user">
            ${message.user_name}
          </div>
          <div class="Main__message-list--message--info--date">
            ${message.created_at}
          </div>
        </div>
        <div class="Main__message-list--message--text">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }
  $('.message-form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      // console.log(data)
      let html = buildHTML(data);
      $('.Main__message-list').append(html);
      $('.message-form')[0].reset();
      $('.Main__message-list').animate({ scrollTop: $('.Main__message-list')[0].scrollHeight});
      $('.message-form__submit').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.message-form__submit').prop("disabled", false);
    });
  });
});