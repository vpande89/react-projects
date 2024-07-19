const Create = () => {
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
        <form>
            <label>Blog body:</label>
            <textarea>
                required
            </textarea>
            <label>Blog author:</label>
            <input
                type  ="text"
                required
            />

        </form>
        </div>
     );
}
 
export default Create;