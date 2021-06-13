import $ from 'jquery' //import jQuery 

    export function submitForm(){
        $("form").on("submit", e => {
            e.preventDefault();
    
            const email = $("#email")
              .val()
              .trim();
            const subject = $("#subject")
              .val()
              .trim();
            const text = $("#text")
              .val()
              .trim();
    
            const data = {
              email,
              subject,
              text
            };
    
            $.post("http://localhost:8081/email", data)
              .then(() => {
                window.location.href = "/contact/success";
              })
              .catch(() => {
                window.location.href = "/contact/fail";
              });
          });
     }