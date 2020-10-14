import React, { useState } from 'react';
import { Segment, Form, Button, Progress, Divider, Image } from 'semantic-ui-react';
import { storage } from '../firebase';

export const HotSpotQuestion = () => {

    const [file, setFile] = useState({
        file: null
    });

    const [url, setUrl] = useState("");

    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if (e.target.files[0]){
            setFile(e.target.files[0]);
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`files/${file.name}`).put(file);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("files")
                    .child(file.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url);
                    });
            }
        );
    }

    return (
        <div className="ui grid">
            <Segment inverted className="nine wide column centered">
                <Form inverted>
                    {/*<Progress percent={99} progress />*/}
                    { progress>0 && progress<100 ? <Progress percent={progress} progress /> : ""}
                    <Form.Field  className="ui centered">
                        <input type="file" onChange={ handleChange } />
                    </Form.Field>
                    <Button primary onClick={ handleUpload } >
                        Subir archivo
                    </Button>
                    <Divider />
                    {file ? <Image src={url} size='big' centered/> : ""}
                </Form>
            </Segment>
        </div>
    )
}