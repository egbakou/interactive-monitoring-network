var nodes = null;
var edges = null;
var network = null;

var DIR = 'img/';
var EDGE_LENGTH_MAIN = 150;
var EDGE_LENGTH_SUB = 50;

// Called when the Visualization API is loaded.
function draw() {
    // Create a data table with nodes.
    nodes = [];

    // Create a data table with links.
    edges = [];

    // Central nodes
    nodes.push({id: 1, label: 'Monitor', title:'<strong>Main I</strong>', image: DIR + 'storage_sync_camera.png', shape: 'image'});
    nodes.push({id: 2, label: 'Storage', title:'<strong>Storage server Node</strong>', image: DIR + 'pont.png', shape: 'image'});
    nodes.push({id: 3, label: 'Jobs Server', title:'<strong>Jobs Server Node</strong>', image: DIR + 'pont.png', shape: 'image'});
    nodes.push({id: 4, label: 'FTP Directory', title:'<strong>FTP Directory Node</strong>', image: DIR + 'pont.png', shape: 'image'});
    nodes.push({id: 5, label: 'Monitor 2', title:'<strong>Main II</strong>', image: DIR + 'main_2.png', shape: 'image'});
    
    // Central Edges
    edges.push({from: 1, to: 2, arrows:'to'});
    edges.push({from: 1, to: 3, arrows:'to'});
    edges.push({from: 1, to: 4, arrows:'to'});
    edges.push({from: 1, to: 5, arrows:'to'});
    

    // Monitor II
    nodes.push({id: 6, label: 'Backup001', title:'<strong>Backup001</strong>', image: DIR + 'backup.png', shape: 'image'});
    nodes.push({id: 7, label: 'Primary001', title:'<strong>Primary001</strong>', image: DIR + 'primary_site.png', shape: 'image'});
    nodes.push({id: 8, label: 'Backup002', title:'<strong>Backup002</strong>', image: DIR + 'backup.png', shape: 'image'});
    edges.push({from: 5, to: 6, arrows:'to'});
    edges.push({from: 5, to: 7, arrows:'to'});
    edges.push({from: 5, to: 8, arrows:'to'});


    // Storage servers
    nodes.push({id: 9, label: 'HP-DATA-01', title:'<strong>HP-DATA-01</strong>', image: DIR + 'storage_server_alert.png', shape: 'image',
    title:'Disk C:<strong style="color:green"> 600 Go / 1 To</strong></br>Disk D:<strong style="color:red"> 490 Go / 500 Go</strong>'});
    nodes.push({id: 10, label: 'DESKTOP-DATA-01', title:'<strong>DESKTOP-DATA-01</strong>', image: DIR + 'storage_server.png', shape: 'image'});
    nodes.push({id: 11, label: 'SLQAzure001', title:'<strong>SLQAzure001</strong>', image: DIR + 'sql_azure.png', shape: 'image'});
    nodes.push({id: 12, label: 'MySQLServer001', title:'<strong>MySQLServer001</strong>', image: DIR + 'mysql_server.png', shape: 'image'});
    nodes.push({id: 13, label: 'Cloud', title:'<strong>Cloud</strong>', image: DIR + 'pont.png', shape: 'image'});
    nodes.push({id: 14, label: 'Cloud001', title:'<strong>Cloud001</strong>', image: DIR + 'cloud.png', shape: 'image'});
    nodes.push({id: 15, label: 'Cloud002', title:'<strong>Cloud002</strong>', image: DIR + 'cloud.png', shape: 'image'});
    nodes.push({id: 16, label: 'Cloud003', title:'<strong>Cloud003</strong>', image: DIR + 'cloud.png', shape: 'image'});
    edges.push({from: 2, to: 9, arrows:'to'});
    edges.push({from: 2, to: 10, arrows:'to'});
    edges.push({from: 2, to: 11, arrows:'to'}); 
    edges.push({from: 2, to: 12, arrows:'to'});
    edges.push({from: 2, to: 13, arrows:'to'});
    edges.push({from: 13, to: 14, arrows:'to'});
    edges.push({from: 13, to: 15, arrows:'to'});
    edges.push({from: 13, to: 16, arrows:'to'});



    // Jobs server
    nodes.push({id: 17, label: 'HP-JOB-02', title:'<strong>HP-JOB-02</strong>', image: DIR + 'job_server.png', shape: 'image'});
    nodes.push({id: 18, label: 'DESKTOP-JOB-02', title:'<strong style="color:red"> Intrusion detect !</strong>', image: DIR + 'job_server_intruision_alert.png', shape: 'image'});
    edges.push({from: 3, to: 17, arrows:'to'});
    edges.push({from: 3, to: 18, arrows:'to'});


    // FTP directory
    nodes.push({id: 19, label: 'Music', title:'<strong>Music directory</strong>', image: DIR + 'data_type.png', shape: 'image'});
    nodes.push({id: 20, label: 'Videos', title:'<strong style="color:red"> Videos directory corrupted !</strong>', image: DIR + 'data_type_alert.png', shape: 'image'});
    nodes.push({id: 21, label: 'Mooc', title:'<strong style="color:red"> Mooc directory corrupted !</strong>', image: DIR + 'data_type_alert.png', shape: 'image'});
    nodes.push({id: 22, label: 'Documents', title:'<strong>Document directory</strong>', image: DIR + 'data_type.png', shape: 'image'});
    edges.push({from: 4, to: 19, arrows:'to'});
    edges.push({from: 4, to: 20, arrows:'to'});
    edges.push({from: 4, to: 21, arrows:'to'});
    edges.push({from: 4, to: 22, arrows:'to'});
    


    // create a network
    var container = document.getElementById('mynetwork');
    var data = {
        nodes: nodes,
        edges: edges
      };
        var options = {  
            interaction:{
                dragNodes:true,
                dragView: true,
                hideEdgesOnDrag: false,
                hideNodesOnDrag: false,
                hover: true,
                hoverConnectedEdges: true,
                keyboard: {
                enabled: false,
                speed: {x: 10, y: 10, zoom: 0.1},
                bindToWindow: true
                },
                multiselect: false,
                navigationButtons: true,
                selectable: true,
                selectConnectedEdges: true,
                tooltipDelay: 200,
                zoomView: true
            } 
    };
    network = new vis.Network(container, data, options);

};
