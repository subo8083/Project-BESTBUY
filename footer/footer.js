let submit=document.getElementById('submit');

let subscribers=JSON.parse(localStorage.getItem('subEmail')) || [];
subscribeEmail = () => {
    let email=document.getElementById('email').value;
    subscribers.push(email);
    localStorage.setItem('subEmail', JSON.stringify(subscribers));
    setTimeout(subscriberAlert, 1000);
    // clearTimeout(infoAlert);
    document.getElementById('email').value = null;
};

subscriberAlert = () => {
    alert('Now you are successfully subscribed for our hottest deals, coolest new products and exclusive sales events.')
};
submit.addEventListener('click', subscribeEmail);


