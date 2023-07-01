import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { footerLinks, manufacturers } from "@/constants";


export const metadata = {
  title: "Car Hub",
  description: "Discover Car Hub: your ultimate car hub for buying, selling, and staying updated with the latest automotive trends. Seamlessly connect with buyers and sellers, explore a vast inventory, and access expert reviews and news. Experience the future of car enthusiasts with Car Hub today!",
  keywords: `car, cars, hub, vehicle, ${manufacturers}, ${footerLinks[2]}`
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}