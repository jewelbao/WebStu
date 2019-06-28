// let imgObj = document.querySelector('img');
// imgObj.onclick = function () {
//     let source = imgObj.getAttribute('src');
//     if (source === 'http://img0.imgtn.bdimg.com/it/u=1452875630,864087820&fm=26&gp=0.jpg') {
//         imgObj.setAttribute('src', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2363037083,4182949652&fm=27&gp=0.jpg');
//     } else {
//         imgObj.setAttribute('src', 'http://img0.imgtn.bdimg.com/it/u=1452875630,864087820&fm=26&gp=0.jpg');
//     }
// }


// function setHeader(name) {
//     let heading = document.querySelector('h1');
//     heading.textContent = 'hello world!   ' + name;
// }

// function setName() {
//     let name = prompt('输入文字');
//     localStorage.setItem('input', name);
//     setHeader(name);
// }


// let inputMsg = localStorage.getItem('input');
// if (!inputMsg) {
//     setName();
// } else {
//     setHeader(inputMsg);
// }

// let btnObj = document.querySelector('button');
// btnObj.onclick = setName;