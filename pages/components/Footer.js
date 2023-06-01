// import InstagramIcon from "./pages/components/icons/instagram_icon.svg";
// import LinkedInIcon from "./pages/components/icons/linkedin_icon.svg";
// import FaceBookIcon from "./pages/components/icons/facebook_icon.svg";
import Image from "next/Image";

function refreshPage() {
    window.scrollTo(0, 0);
    window.location.reload(false);
    }

const applicationLink =
  "https://docs.google.com/forms/d/e/1FAIpQLScc3bGFP6uV8Hki20BW1XQq4m1i6-W06qNpg-9eg2mic5Co0A/viewform?usp=sf_link";
const instaLink = 
  "https://www.instagram.com/ucsdcompass/";
const linkedinLink = 
  "https://www.linkedin.com/company/compass-institution/about/";
const fbLink = 
  "facebook.com";

export default function Footer() {
    return (
        <footer className="container mx-auto sticky bottom-0 w-full border-t-1 z-50 pt-3 bg-white shadow-sm">
            <div className="flex">
              <div className="container mx-auto">
                <div className="flex justify-center ml-40">
                  <div className="flex items-center">
                    <Image src="/compass_institution.png" width="200" height="150" className="mr-2 text-blue-500 hover:text-blue-700" />
                  </div>       
                  <div className="flex items-center">
                    <Image src="/simple_compass.png" width="62" height="62" className="mr-2 text-blue-500 hover:text-blue-700" />
                  </div>                
                </div>
                
              </div>
            
            
              <div className="container mx-auto">
                <div className="flex justify-between mr-40">
                  <div className="w-60">
                    <p className="text-sm">We are a non-profit using math and data science for social good.</p>
                  </div>
                  <div className="flex items-center">
                    <a href={instaLink} target="_blank" rel="noopener noreferrer">
                      <Image src="/instagram_icon.svg" width="40" height="40" className="mr-10 text-blue-500 hover:text-blue-700" />
                    </a>
                    <a href={fbLink} target="_blank" rel="noopener noreferrer">
                      <Image src="/facebook_icon.svg" width="40" height="40" className="mr-10 text-blue-500 hover:text-blue-700" />
                    </a>
                    <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                      <Image src="/linkedin_icon.svg" width="40" height="40" className="mr-2 text-blue-500 hover:text-blue-700" />
                    </a>
                  </div>
                </div>
                <div className="flex justify-between mt-4 mr-40">
                    <button onClick={refreshPage} className="px-4 underline hover:no-underline">
                      ABOUT
                    </button>
                    <button className="px-4 underline hover:no-underline">CONTACT</button>
                    <button className="px-4 underline hover:no-underline">OUR WORK</button>
                    <button
                      onClick={() => window.open(applicationLink, "_blank", "noreferrer")}
                      className="px-4 underline hover:no-underline"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      APPLY
                    </button>
                </div>
              </div>
            </div>
        </footer>
          
        // <div className="container mx-auto">
        //   <footer className="sticky bottom-0 w-full border-t-1 z-50 pt-3 bg-white shadow-sm">
        //     <div className="container flex items-center justify-between">
        //       <div className="flex items-center">
        //         <h1 className="text-lg font-bold">COMPASS INSTITUTION</h1>
        //         <img src="/logo.png" alt="Logo" className="ml-2 h-6" />
        //       </div>
        //       <div className="flex items-center">
        //         <div className="flex items-center">
        //           <a href={instaLink} target="_blank" rel="noopener noreferrer">
        //             <Image src="/instagram_icon.svg" width="62" height="62" className="mr-2 text-blue-500 hover:text-blue-700" />
        //           </a>
        //           <a href={fbLink} target="_blank" rel="noopener noreferrer">
        //             <Image src="/facebook_icon.svg" width="62" height="62" className="mr-2 text-blue-500 hover:text-blue-700" />
        //           </a>
        //           <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
        //             <Image src="/linkedin_icon.svg" width="62" height="62" className="mr-2 text-blue-500 hover:text-blue-700" />
        //           </a>
        //         </div>
        //       </div>
        //     </div>
        //     <div className="container flex items-center justify-between">
        //       <div className="flex items-center">
        //         <button onClick={refreshPage} className="px-4 underline hover:no-underline">
        //           ABOUT
        //         </button>
        //         <button className="px-4 underline hover:no-underline">CONTACT</button>
        //         <button className="px-4 underline hover:no-underline">OUR WORK</button>
        //       </div>
        //       <button
        //         onClick={() => window.open(applicationLink, "_blank", "noreferrer")}
        //         className="px-4 underline hover:no-underline"
        //         style={{ whiteSpace: "nowrap" }}
        //       >
        //         APPLY
        //       </button>
        //     </div>
        //   </footer>
        // </div>

        
      );
}