import { TextField } from "@mui/material"
import { useState } from "react";

const ItineraryAdmin = () => {
    const [value, setValue] = useState('');
    
      const handleChange = (event) => {
        setValue(event.target.value);
      };
    return (
        <form>
            <TextField
          id="outlined-multiline-flexible"
          label="Title"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Hashtags"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
        
        </form>
    )
}

export default ItineraryAdmin
