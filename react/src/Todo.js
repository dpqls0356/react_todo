function Todo({getUser}){
    const logout = () =>{
        getUser(false);
    }
    return (
        <div>
            <header>
                <h2>TODO LIST</h2>
                <button onClick={logout}>Logout</button>
            </header>
            <form>
                <input type="text"></input>
                <input type="submit" value="Add"></input>
            </form>
        </div>
    )
}

export default Todo;