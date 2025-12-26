import { USyncQueryProtocol } from 'mod-baileys/lib/Types/USync';
import { BinaryNode } from 'mod-baileys/lib/WABinary';
import { USyncUser } from 'mod-baileys/lib/WAUSync/USyncUser';
export declare class USyncContactProtocol implements USyncQueryProtocol {
    name: string;
    getQueryElement(): BinaryNode;
    getUserElement(user: USyncUser): BinaryNode;
    parser(node: BinaryNode): boolean;
}
