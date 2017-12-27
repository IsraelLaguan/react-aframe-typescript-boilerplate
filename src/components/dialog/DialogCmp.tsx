import React from 'react';
import './DialogCmp.css';

interface IProps {
  title?: string;
  children?: any;
  [attrs: string]: any;
}

interface IState {
  isOpen: boolean
}

export default class Dialog extends React.PureComponent<IProps, IState> {

  public state = {isOpen: false};

  private dialogContainer: HTMLDivElement;

  /* Css class name for animation when showing Dialog */
  private static classOpenDialog = 'scale-in-ver-center';

  /* Css class name for animation when hidding Dialog */
  private static classClosedDialog = 'scale-out-vertical';

  // public componentDidMount() {
  //   const parentElement = this.dialogContainer && this.dialogContainer.parentElement as HTMLElement;
  //   parentElement && parentElement.addEventListener('click', () => {
  //     this.hide(); // Hide dialog when click outside
  //   });
  // }

  public hide() {
    this.dialogContainer.classList.remove(Dialog.classOpenDialog);
    this.dialogContainer.classList.add(Dialog.classClosedDialog);
  }

  public show() {
    this.dialogContainer.style.display = 'block';
    this.dialogContainer.classList.remove(Dialog.classClosedDialog);
    this.dialogContainer.classList.add(Dialog.classOpenDialog);
  }

  public open() {
    this.setState({isOpen: true});
  }

  public close() {
    this.setState({isOpen: false});
  }

  public render() {
    let dialogContainerClass: string;
    if (this.state.isOpen) {
      dialogContainerClass = 'dialogContainer ' + Dialog.classOpenDialog;
    } else {
      dialogContainerClass = 'dialogContainer ' + Dialog.classClosedDialog;
    }

    return (
      <div ref={ (dialogContainer: HTMLDivElement) => this.dialogContainer = dialogContainer }
        className={ dialogContainerClass }>
          <div className="dialogContent">
            <div className="dialog-title">{ this.props.title }</div>
            { this.props.children }
          </div>
      </div>
    )

  }
}