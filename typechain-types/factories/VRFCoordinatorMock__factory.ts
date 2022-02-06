/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VRFCoordinatorMock,
  VRFCoordinatorMockInterface,
} from "../VRFCoordinatorMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "linkAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "keyHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "seed",
        type: "uint256",
      },
    ],
    name: "RandomnessRequest",
    type: "event",
  },
  {
    inputs: [],
    name: "LINK",
    outputs: [
      {
        internalType: "contract LinkTokenInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "randomness",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "consumerContract",
        type: "address",
      },
    ],
    name: "callBackWithRandomness",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "onTokenTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161091b38038061091b8339818101604052810190610032919061008d565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506100ff565b600081519050610087816100e8565b92915050565b60006020828403121561009f57600080fd5b60006100ad84828501610078565b91505092915050565b60006100c1826100c8565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6100f1816100b6565b81146100fc57600080fd5b50565b61080d8061010e6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80631b6b6d2314610046578063a4c0ed3614610064578063cf55fe9714610080575b600080fd5b61004e61009c565b60405161005b91906105d4565b60405180910390f35b61007e600480360381019061007991906103c4565b6100c0565b005b61009a60048036038101906100959190610467565b6101b5565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461014e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101459061060f565b60405180910390fd5b60008082806020019051810190610165919061042b565b9150915080828673ffffffffffffffffffffffffffffffffffffffff167f7a9a0a6960d95b32cded93c30e63e7c2eb9e877230813c172110ea54dc1c915c60405160405180910390a45050505050565b6000806394985ddd60e01b85856040516024016101d39291906105ab565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090506000620324b09050805a101561027d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610274906105ef565b60405180910390fd5b60008473ffffffffffffffffffffffffffffffffffffffff16836040516102a49190610594565b6000604051808303816000865af19150503d80600081146102e1576040519150601f19603f3d011682016040523d82523d6000602084013e6102e6565b606091505b5050905050505050505050565b600061030661030184610660565b61062f565b90508281526020810184848401111561031e57600080fd5b610329848285610721565b509392505050565b60008135905061034081610792565b92915050565b600081359050610355816107a9565b92915050565b60008151905061036a816107a9565b92915050565b600082601f83011261038157600080fd5b81356103918482602086016102f3565b91505092915050565b6000813590506103a9816107c0565b92915050565b6000815190506103be816107c0565b92915050565b6000806000606084860312156103d957600080fd5b60006103e786828701610331565b93505060206103f88682870161039a565b925050604084013567ffffffffffffffff81111561041557600080fd5b61042186828701610370565b9150509250925092565b6000806040838503121561043e57600080fd5b600061044c8582860161035b565b925050602061045d858286016103af565b9150509250929050565b60008060006060848603121561047c57600080fd5b600061048a86828701610346565b935050602061049b8682870161039a565b92505060406104ac86828701610331565b9150509250925092565b6104bf816106c9565b82525050565b60006104d082610690565b6104da818561069b565b93506104ea818560208601610730565b80840191505092915050565b6104ff816106fd565b82525050565b6000610512601b836106a6565b91507f6e6f7420656e6f7567682067617320666f7220636f6e73756d657200000000006000830152602082019050919050565b60006105526013836106a6565b91507f4d75737420757365204c494e4b20746f6b656e000000000000000000000000006000830152602082019050919050565b61058e816106f3565b82525050565b60006105a082846104c5565b915081905092915050565b60006040820190506105c060008301856104b6565b6105cd6020830184610585565b9392505050565b60006020820190506105e960008301846104f6565b92915050565b6000602082019050818103600083015261060881610505565b9050919050565b6000602082019050818103600083015261062881610545565b9050919050565b6000604051905081810181811067ffffffffffffffff8211171561065657610655610763565b5b8060405250919050565b600067ffffffffffffffff82111561067b5761067a610763565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006106c2826106d3565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006107088261070f565b9050919050565b600061071a826106d3565b9050919050565b82818337600083830152505050565b60005b8381101561074e578082015181840152602081019050610733565b8381111561075d576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61079b816106b7565b81146107a657600080fd5b50565b6107b2816106c9565b81146107bd57600080fd5b50565b6107c9816106f3565b81146107d457600080fd5b5056fea2646970667358221220fb58b47943feb90757b6bd2fedb807abf64cc1b76505116f57a315969bf6801664736f6c63430008000033";

type VRFCoordinatorMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VRFCoordinatorMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VRFCoordinatorMock__factory extends ContractFactory {
  constructor(...args: VRFCoordinatorMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "VRFCoordinatorMock";
  }

  deploy(
    linkAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VRFCoordinatorMock> {
    return super.deploy(
      linkAddress,
      overrides || {}
    ) as Promise<VRFCoordinatorMock>;
  }
  getDeployTransaction(
    linkAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(linkAddress, overrides || {});
  }
  attach(address: string): VRFCoordinatorMock {
    return super.attach(address) as VRFCoordinatorMock;
  }
  connect(signer: Signer): VRFCoordinatorMock__factory {
    return super.connect(signer) as VRFCoordinatorMock__factory;
  }
  static readonly contractName: "VRFCoordinatorMock";
  public readonly contractName: "VRFCoordinatorMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VRFCoordinatorMockInterface {
    return new utils.Interface(_abi) as VRFCoordinatorMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VRFCoordinatorMock {
    return new Contract(address, _abi, signerOrProvider) as VRFCoordinatorMock;
  }
}