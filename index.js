async function onClickUps(){
    let response = fetch('http://localhost:3000/ups/upscheck');
    console.log("response",response);
}
