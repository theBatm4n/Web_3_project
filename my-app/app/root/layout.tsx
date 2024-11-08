import Sidebar from "@/components/Sidebar";

export default function homeLayout({children,}: Readonly<{children: React.ReactNode;}>){
    return(
        <main className="flex h-screen w-full font-inter">
            <Sidebar />
            {children}
        </main>
    );
}
