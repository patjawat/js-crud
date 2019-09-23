import Document, { Head, Main, NextScript } from "next/document";

export default class Mydocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href="/static/admin-lte/plugins/fontawesome-free/css/all.min.css"
          />
          <link
            rel="stylesheet"
            href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
          />
          <link
            rel="stylesheet"
            href="/static/admin-lte/dist/css/adminlte.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700"
            rel="stylesheet"
          />
          <script src="static/admin-lte/plugins/jquery/jquery.min.js"></script>
          <script src="static/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="static/admin-lte/dist/js/adminlte.min.js"></script>
          <script src="static/admin-lte/dist/js/demo.js"></script>
        </Head>
        <body className="hold-transition sidebar-mini layout-navbar-fixed layout-fixed layout-footer-fixed">
          <div className="wrapper">
            <Main />
            <NextScript />
          </div>
        </body>
      </html>
    );
  }
}
