import { useEffect } from "react";


const TitleHook = title => {

    useEffect(() => {
        document.title = `${title} - PhotoWin`
    }, [title])
};

export default TitleHook;