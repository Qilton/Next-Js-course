export default function ProductDetailsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
        <header>Product Header layout</header>
        {children}
        <footer>Product Footer layout</footer>
      </>
    );
  }
  