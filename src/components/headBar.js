
import React from 'react';
import '../css/sideMenu.css';
class Heading extends React.Component {
    render() {
        return (
            <div className="container-fluid">
        <div className="row d-flex d-md-block flex-nowrap wrapper">
            <div className="col-md-3 float-left col-1 pl-0 pr-0 collapse width show" id="sidebar">
                    <div className="list-group border-0 card text-center text-md-left">
                    <a href="#menu1" className="list-group-item d-inline-block collapsed" data-toggle="collapse" aria-expanded="false"><i className="fa fa-dashboard"></i> <span className="d-none d-md-inline">Item 1</span> </a>
                    <div className="collapse" id="menu1" data-parent="#sidebar">
                        <a href="#menu1sub1" className="list-group-item" data-toggle="collapse" aria-expanded="false">Subitem 1 </a>
                        <div className="collapse" id="menu1sub1" data-parent="#menu1">
                            <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem a</a>
                            <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem b</a>
                            <a href="#menu1sub1sub1" className="list-group-item" data-toggle="collapse" aria-expanded="false">Subitem c </a>
                            <div className="collapse" id="menu1sub1sub1">
                                <a href="#" className="list-group-item" data-parent="#menu1sub1sub1">Subitem c.1</a>
                                <a href="#" className="list-group-item" data-parent="#menu1sub1sub1">Subitem c.2</a>
                            </div>
                            <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem d</a>
                            <a href="#menu1sub1sub2" className="list-group-item" data-toggle="collapse" aria-expanded="false">Subitem e </a>
                            <div className="collapse" id="menu1sub1sub2">
                                <a href="#" className="list-group-item">Subitem e.1</a>
                                <a href="#" className="list-group-item">Subitem e.2</a>
                            </div>
                        </div>
                        <a href="#menu1sub2" className="list-group-item" data-toggle="collapse" aria-expanded="false">Subitem 2</a>
                        <div className="collapse" id="menu1sub2" data-parent="#menu1">
                            <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 1 a</a>
                            <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 2 b</a>
                            <a href="#menu1sub1sub1" className="list-group-item" data-toggle="collapse" aria-expanded="false">Subitem 3 c </a>
                            <div className="collapse" id="menu1sub1sub1">
                                <a href="#" className="list-group-item" data-parent="#menu1sub1sub1">Subitem 3 c.1</a>
                                <a href="#" className="list-group-item" data-parent="#menu1sub1sub1">Subitem 3 c.2</a>
                            </div>
                            <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 4 d</a>
                            <a href="#menu1sub1sub2" className="list-group-item" data-toggle="collapse" aria-expanded="false">Subitem 5 e </a>
                            <div className="collapse" id="menu1sub1sub2">
                                <a href="#" className="list-group-item" data-parent="#menu1sub1sub2">Subitem 5 e.1</a>
                                <a href="#" className="list-group-item" data-parent="#menu1sub1sub2">Subitem 5 e.2</a>
                            </div>
                        </div>
                        <a href="#" className="list-group-item">Subitem 3</a>
                    </div>
                    <a href="#" className="list-group-item d-inline-block collapsed"><i className="fa fa-film"></i> <span className="d-none d-md-inline">Item 2</span></a>
                    <a href="#menu3" className="list-group-item d-inline-block collapsed" data-toggle="collapse" aria-expanded="false"><i className="fa fa-book"></i> <span className="d-none d-md-inline">Item 3 </span></a>
                    <div className="collapse" id="menu3" data-parent="#sidebar">
                        <a href="#" className="list-group-item" data-parent="#menu3">3.1</a>
                        <a href="#menu3sub2" className="list-group-item" data-toggle="collapse" aria-expanded="false">3.2 </a>
                        <div className="collapse" id="menu3sub2">
                            <a href="#" className="list-group-item" data-parent="#menu3sub2">3.2 a</a>
                            <a href="#" className="list-group-item" data-parent="#menu3sub2">3.2 b</a>
                            <a href="#" className="list-group-item" data-parent="#menu3sub2">3.2 c</a>
                        </div>
                        <a href="#" className="list-group-item" data-parent="#menu3">3.3</a>
                    </div>
                    <a href="#" className="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i className="fa fa-heart"></i> <span className="d-none d-md-inline">Item 4</span></a>
                    <a href="#" className="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i className="fa fa-list"></i> <span className="d-none d-md-inline">Item 5</span></a>
                    <a href="#" className="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i className="fa fa-clock-o"></i> <span className="d-none d-md-inline">Link</span></a>
                    <a href="#" className="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i className="fa fa-th"></i> <span className="d-none d-md-inline">Link</span></a>
                    <a href="#" className="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i className="fa fa-gear"></i> <span className="d-none d-md-inline">Link</span></a>
                    <a href="#" className="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i className="fa fa-calendar"></i> <span className="d-none d-md-inline">Link</span></a>
                    <a href="#" className="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i className="fa fa-envelope"></i> <span className="d-none d-md-inline">Link</span></a>
                    <a href="#" className="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i className="fa fa-bar-chart-o"></i> <span className="d-none d-md-inline">Link</span></a>
                    <a href="#" className="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i className="fa fa-star"></i> <span className="d-none d-md-inline">Link</span></a>
                </div>
            </div>
            <main className="col-md-9 float-left col px-5 pl-md-2 pt-2 main">
                <a href="#" data-target="#sidebar" data-toggle="collapse"><i className="fa fa-navicon fa-2x py-2 p-1"></i></a>
                <div className="page-header">
                    <h2>Bootstrap 4 Sidebar Menu</h2>
                </div>
                <p className="lead">A responsive, multi-level vertical accordion.</p>
                <hr/>
                <div className="row">
                    <div className="col-lg-6">
                        <button role="button" className="btn btn-danger" data-toggle="collapse" data-target="#demo" aria-expanded="true">
                            horizontal collapsible
                        </button>
                        <div id="demo" className="width collapse show" aria-expanded="true">
                            <div className="list-group" style={{width:'400px'}}>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <button role="button" className="btn btn-danger" data-toggle="collapse" data-target="#demo2" aria-expanded="true">
                           vertical collapsible
                        </button>
                        <div id="demo2" className="height collapse show" aria-expanded="true">
                            <div>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
        )
    }
}

export default Heading;