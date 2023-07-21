import { adminPasswordEnvKey, adminUsernameEnvKey } from '../config/admin.env';
import { Password } from '../lib';
import { adminService } from '../modules';

export async function createAdminIfNotExists() {
  const username = adminUsernameEnvKey;

  const admin = await adminService.findOne({ username });

  if (!admin) {
    const password = await Password.hash(adminPasswordEnvKey);

    await adminService.createOne({
      username,
      password,
    });
  }
}
