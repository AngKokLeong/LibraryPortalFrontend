import { useOktaAuth } from "@okta/okta-react"
import { useState } from "react";

export const AddNewBook = () => {
    const { authState } = useOktaAuth():
    
    // Book State

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [copies, setCopies] = useState(0);
    const [category, setCategory] = useState('Category');
    const [selectedImage, setSelectedImage] = useState<any>(null);


    // Displays 
    const [displayWarning, setDisplayWarning] = useState(false);
    const [displaySuccess, setDisplaySuccess] = useState(false);

    function categoryField(value: string){
        setCategory(value);
    }

    return (
        <div>
            
        </div>
    );
}