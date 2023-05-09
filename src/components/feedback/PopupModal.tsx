// import {Button, Input, Modal} from "@nextui-org/react";
// import {useState} from "react";

// export default function PopUpModal() {
//   const [visible, setVisible] = useState(false);
//   const handler = () => setVisible(true);
//   const closeHandler = () => {
//     setVisible(false);
//     console.log("closed");
//   };
//   return (
//     <div>
//       <Button auto color="warning" shadow onPress={handler}>
//         Open modal
//       </Button>
//       <Modal
//         closeButton
//         blur
//         aria-labelledby="modal-title"
//         open={visible}
//         onClose={closeHandler}
//       >
//         <Modal.Header>
//           <Text id="modal-title" size={18}>
//             Welcome to
//             <Text b size={18}>
//               NextUI
//             </Text>
//           </Text>
//         </Modal.Header>
//         <Modal.Footer>
//           <Button auto flat color="error" onPress={closeHandler}>
//             Close
//           </Button>
//           <Button auto onPress={closeHandler}>
//             Sign in
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   )
// }