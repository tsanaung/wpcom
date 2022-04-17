export function discover() {
 let discov = document.getElementById('article');
 let defaultMethod = document.createElement('div');
 defaultMethod.setAttribute('class', 'card bs pad');
 defaultMethod.innerHTML = '<h3>Under Development</h3><p>Sorry! <strong>Discover</strong> feature is not ready for the current version, it\'s under development. The next update will bring the Discover feature with some useful methods. Thanks.';
 discov.appendChild(defaultMethod);
}