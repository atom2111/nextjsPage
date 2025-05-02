import Footer from "@/components/Footer";

export const metadata = {
  title: "Anvar | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
