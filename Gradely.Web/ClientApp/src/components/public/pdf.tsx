import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const PDF = () => (
    <Button>Generate PDF</Button>
    <div id='pdf'>
        <h1>Example PDF Doc</h1>
    </div>
);

<script>
    var button = document.getElementById('Button');
    var html = document.getElementById('pdf').html();
    window.open('../public/GeneratePDF?html=' + html, '_blank');
</script>

export default connect()(PDF);