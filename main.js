import { createElement, Component, render } from './toy-react.js';

class MyComponent extends Component {
    render() {
        return <div>
            <div>my component</div>
            {this.children}
        </div>
    }
}



let a = <MyComponent id="1">
    <div>abd</div>
    <div></div>
    <div></div>
</MyComponent>

render(a, document.body);