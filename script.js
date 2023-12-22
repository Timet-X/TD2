let ws = new WebSocket("wss://websocket-1.onrender.com/:443");

let controllTD3 = document.querySelector('.controllTD3'); // 保留文本输入框的引用
let submitButton = document.querySelector('#submitButton'); // 引用提交按钮

// 提交按钮点击事件
submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // 防止表单默认提交行为
  ws.send(JSON.stringify({ 'text': controllTD3.value })); // 发送文本输入框的值
}, false);

// WebSocket 的其他事件监听器...

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
