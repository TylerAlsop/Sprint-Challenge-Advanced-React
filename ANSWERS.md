- [ ] Why would you use class component over function components (removing hooks from the question)?

It seems like the main reason would be that most employers still use class components. Another reason might be because of how difficult it can be to access data in state between function components whereas with class components usually have it passed down through props.
But in all actuality it is because of the React Lifecycle. Using the componentDidMount(), and componentDidUpdate() is only available when using class components.


- [ ] Name three lifecycle methods and their purposes.

1- constructor(): Initializes local state and binds event handlers
2- render(): Returns React Elements and utilizes this.props and this.state.
3- componendDidMount(): Starts right as a component is mounted. Can be used to confirm that the componed mounted and is the best place to load data from remote endpoints like an API call. "Inistialization the requieres DOM nodes should go here." ~reactjs.org
4- componentDidUpdate(): This is only used when something is updated (like state), and a rerender happens.
5- componentWillUnmount(): Used when the component is being unmounted. It's like a cleanup method to clean up things like network requests, etc.


- [ ] What is the purpose of a custom hook?


- [ ] Why is it important to test our apps?

