
document.getElementById('wishForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const name = document.getElementById('friendName').value;
  const phone = document.getElementById('phone').value;
  const time = document.getElementById('sendTime').value;
  const msg = document.getElementById('message').value;

  document.getElementById('output').innerHTML = `
    ✅ <b>${name}</b> ke liye birthday wish schedule ho gaya hai! <br/>
    📱 Mobile: ${phone} <br/>
    🕒 Time: ${new Date(time).toLocaleString()} <br/>
    💌 Message: "${msg}"
    <br/><br/>
    <i>(Note: Actual SMS bhejne ke liye backend + SMS API jodni hogi)</i>
  `;
});
