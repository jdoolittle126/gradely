import * as React from 'react';
import './NavMenu.css';

export default class Footer extends React.PureComponent<{}, {}> {

    public render() {
        return (
            <footer className="mt-2 ">
                <div className="text-center p-4 bg-light bg-gradient">
                    &copy; {(new Date().getFullYear())} Copyright: ReactorsJ^2
                </div>
            </footer>
        );
    }
}
