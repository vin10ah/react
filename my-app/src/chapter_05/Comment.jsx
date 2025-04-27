import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid grey',
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        sidth: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    nameText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    commentText: {
        color: 'black',
        fontsize: 16,
    },  
};

function Comment(props) {
    return(
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img 
                    src='https://i.namu.wiki/i/AGwhfLbqwPfe613VURNaKVefq1E_bf1MeC5HiML8DxigsOZWQy4Fs9hPmcf24nR8QJAlwj5P8NrNEJX-Vst7tw.webp'
                    style={styles.image}
                />
            </div>
        
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>seobin</span>
                <span style={styles.commentText}>
                    first component
                </span>
            </div>
        </div>     
    );
}

export default Comment;