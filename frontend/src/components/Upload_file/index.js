import React, { useState } from "react";
import ReactPlayer from "react-player";
import styles from "./upload.module.css";
const UploadForm = () => {
    const [fileMeta, setfileMeta] = useState({});
    const [CompanyName, setCompanyName] = useState("");
    const [CompanyAddress, setCompanyAddress] = useState("");
    const [ProductBrand, setProductBrand] = useState("");
    const [ProductType, setProductType] = useState("");
    const [Category, setCategory] = useState("");
    const [ProductPrice, setProductPrice] = useState("");
    const [ProductDescription, setProductDescription] = useState("");
    const [fileDisplay, setfileDisplay] = useState(
        "No file currently selected for Upload"
    );

    const [previewVideo, setPreviewVideo] = useState(null);
    const FileChangeHandler = (e) => {
        // setSelected(true);
        const display =
            "File name " +
            e.target.files[0].name +
            " File size " +
            (e.target.files[0].size / 1000000).toFixed(3) +
            "MB";
        setfileDisplay(display);
        setfileMeta(e.target.files[0]);
        setPreviewVideo(URL.createObjectURL(e.target.files[0]));
        console.log(e.target.files[0]);
    };
    const CancelUpload = () => {
        // setSelected(false);
        setfileMeta({});
        setPreviewVideo(null);
        setfileDisplay("No file currently selected for Upload");
    };

    return (
        <div className={styles.form}>
            <h1>New Post</h1>
            <br></br>
            <div className={styles.inputHolder}>
                <div className={styles.upload}>Upload</div>
                <input
                    required
                    type="file"
                    style={{ display: "none" }}
                    id="video"
                    onChange={FileChangeHandler}
                    placeholder="choose file"
                ></input>
                <input disabled className={styles.File} placeholder="Choose file"></input>
                <label className={styles.LabelVideo} htmlFor="video">
                    Browse
                </label>
            </div>
            <div className={styles.fd}>{fileDisplay}</div>
            <ReactPlayer
                className={styles.VideoPlayer}
                url={previewVideo}
                width="300px"
                controls
                height="150px"
                playing={true}
            ></ReactPlayer>
            <br />
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    if (fileMeta.name === undefined) {
                        alert("Select File");
                        return;
                    }

                    console.log(
                        CompanyName,
                        CompanyAddress,
                        ProductBrand,
                        fileMeta,
                        ProductType,
                        Category,
                        ProductPrice,
                        ProductDescription
                    );
                }}
            >
                <div className={styles.h4}>Company Name*</div>
                <input
                    value={CompanyName}
                    className={styles.inputStyle}
                    onChange={(e) => {
                        setCompanyName(e.target.value);
                    }}
                    required
                ></input>
                <div className={styles.h4}>Email Address*</div>
                <input
                    value={CompanyAddress}
                    type="email"
                    className={styles.inputStyle}
                    onChange={(e) => {
                        setCompanyAddress(e.target.value);
                    }}
                    required
                ></input>
                <div className={styles.h4}>Product Brand(with Model)*</div>
                <input
                    value={ProductBrand}
                    className={styles.inputStyle}
                    onChange={(e) => {
                        setProductBrand(e.target.value);
                    }}
                    required
                ></input>
                <div className={styles.h4}>Product Type*</div>
                <input
                    value={ProductType}
                    className={styles.inputStyle}
                    onChange={(e) => {
                        setProductType(e.target.value);
                    }}
                    required
                ></input>
                <div className={styles.h4}>Category*</div>
                <select
                    className={styles.inputStyle}
                    value={Category}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setCategory(e.target.value);
                    }}
                >
                    <option value="shirt">shirt</option>
                    <option value="shoes">shoes</option>
                    <option value="pants">pants</option>
                </select>
                <div className={styles.h4}>Product Price*</div>
                <input
                    type="number"
                    value={ProductPrice}
                    onChange={(e) => {
                        setProductPrice(e.target.value);
                    }}
                    className={styles.inputStyle}
                    required
                ></input>
                <div className={styles.h4}>Product Description*</div>
                <textarea
                    value={ProductDescription}
                    onChange={(e) => {
                        setProductDescription(e.target.value);
                    }}
                    className={styles.textInput}
                ></textarea>

                <div className={styles.Buttons}>
                    <input className={styles.button28} type="submit" value="Upload" />
                    <button className={styles.button29} onClick={CancelUpload}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UploadForm;