export const CreateToDo=()=>{
    const [data, setData] = useState({ title: "", text: "" });

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    
}