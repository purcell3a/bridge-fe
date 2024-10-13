
import { useState} from 'react'
function SymptomEntry() {

    const [symptom, setSymptom] = useState('')
    const [description, setDescription] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:8000/symptoms/log-symptom', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                symptom: symptom,
                description: description,
            }),
        })
    }
    return (
        <>
        <div className="SymptomEntry">
            <section classname="symptom-entry">
            <form className="SymptomForm" onSubmit={handleSubmit}>
                <label>Symptom:</label>
                <input type="text" placeholder="Enter Symptom" onChange={e=>setSymptom(e.target.value)} />
                <label>Description:</label>
                <input type="text" placeholder="Enter Description" onChange={e=>setDescription(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
            </section>
        </div>
        </>
    )
}   

export default SymptomEntry