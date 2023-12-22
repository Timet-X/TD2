let ws = new WebSocket("wss://websocket-1.onrender.com/:443");

let controllTD = document.querySelector('.controllTD');
let controllTD2 = document.querySelector('.controllTD2');
let controllTD3 = document.querySelector('.controllTD3');
let submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // 防止表单默认提交行为
  ws.send(JSON.stringify({ 
    'slider1': controllTD.value / 100, 
    'slider2': controllTD2.value / 100, 
    'text': controllTD3.value 
  }));
}, false);

// 其他 WebSocket 事件监听器保持不变...

ws.addEventListener('open', (event) => {
  console.log('Socket connection open!');
  // alert('Successfully connected to socket server 🎉');
  ws.send('pong');
});

ws.addEventListener('error', (error) => {
    console.error('Error in the connection', error);
    alert('error connecting socket server', error);
});

ws.addEventListener('close', (event) => {
    console.log('Socket connection closed');
    alert('closing socket server');
});
