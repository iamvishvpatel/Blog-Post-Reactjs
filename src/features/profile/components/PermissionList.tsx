import type { Permission } from "../../auth/models";

const PermissionList = ({ permissions }: { permissions: Permission[] }) => {
  if (!permissions.length) return null;

  return (
    <div className="mt-8">
      <h4 className="text-lg font-semibold text-gray-700 mb-3">Permissions</h4>
      <ul className="grid grid-cols-2 gap-3">
        {permissions.map((perm) => (
          <li
            key={perm.id}
            className="px-4 py-2 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-200 cursor-default"
            title={perm.description}
          >
            {perm.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionList;
