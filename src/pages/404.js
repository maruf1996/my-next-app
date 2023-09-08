import { useRouter } from "next/router";

const ErrorPage = () => {
    const router=useRouter()
    setTimeout(()=>{
        router.push('/')
    },5000)
    return (
        <div>
            <img src="https://w7.pngwing.com/pngs/351/333/png-transparent-http-404-error-message-desktop-design-angle-text-trademark.png" width="100%" alt="" />
        </div>
    );
};

export default ErrorPage;