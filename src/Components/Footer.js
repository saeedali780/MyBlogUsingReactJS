import React from 'react'

export default function Footer() {
  return (
    // <!-- Footer -->
    <footer>
            <div className="row">
        <div className="container">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <ul className="list-inline text-center">
                        <li>
                            <a href="#">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <p className="copyright text-muted">Copyright &copy; Saeed's Blog 2024</p>
                </div>
            </div>
        </div>
    </footer>

  )
}
