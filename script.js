let ws = new WebSocket("wss://websocket-1.onrender.com/:443");

let controllTD3 = document.querySelector('.controllTD3');
controllTD3.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    ws.send(JSON.stringify({ 'text': controllTD3.value }));
    controllTD3.value = ''; // 这里清空文本框
    event.preventDefault(); // 阻止默认的回车行为（例如表单提交）
  }
}, false);

ws.addEventListener('open', (event) => {
  console.log('Socket connection open!');
  ws.send('pong');
});

ws.addEventListener('error', (error) => {
  console.error('Error in the connection', error);
});

ws.addEventListener('close', (event) => {
  console.log('Socket connection closed');
});
