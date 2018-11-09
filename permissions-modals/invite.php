<div class="modal">
	<div class="invite">
		<div class="modal-header">
			<h1 class="modal-title">Invite User</h1>
		</div>
		<div class="modal-body">
			<div class="invite-list"></div>
			<p class="error invite-form-error">An error occurred. Sorry this wasn't more helpful.</p>
			<div class="invite-form">
				<input class="invite-first" placeholder="First Name">
				<input class="invite-last" placeholder="Last Name">
				<input class="invite-email" placeholder="Email Address">
				<i class="add-icon js-add"></i>
			</div>
			<div class="invite-access">
				<i class="invite-access-icon"></i>
				<div class="invite-pair">
					<input type="checkbox" class="invite-checkbox" id="basic-checkbox" checked>
					<label for="basic-checkbox">Basic Reporting</label>
				</div>
				<div class="invite-pair">
					<input type="checkbox" class="invite-checkbox" id="engagement-checkbox" checked>
					<label for="engagement-checkbox">Engagement Report</label>
				</div>
				<div class="invite-pair">
					<input type="checkbox" class="invite-checkbox" id="team-checkbox">
					<label for="team-checkbox">Team Report</label>
				</div>
			</div>
			<div class="invite-manage">
				<i class="invite-manage-icon"></i>
				<div class="invite-pair">
					<input type="checkbox" class="invite-checkbox" id="profiles-checkbox">
					<label for="profiles-checkbox">Manage profiles &amp; permissions</label>
				</div>
				<div class="invite-pair">
					<input type="checkbox" class="invite-checkbox" id="users-checkbox">
					<label for="users-checkbox">Invite other users</label>
				</div>
				<div class="invite-pair">
					<input type="checkbox" class="invite-checkbox" id="super-checkbox">
					<label for="super-checkbox">Super admin</label>
				</div>
			</div>
		</div>
		<div class="modal-body invite-groups">
			<h2 class="modal-title">Choose Groups</h2>
			<a class="invite-group selected">Sprout Social Team</a>
			<a class="invite-group">Sprout Social AU</a>
			<a class="invite-group">Sprout Social EURO</a>
			<a class="invite-group">Sprout Social UK</a>
			<a class="invite-group">Sprout Social JP</a>
		</div>
		<div class="modal-body invite-profiles">
			<table>
				<tr class="profiles-tr">
					<th class="profiles-th">Profile Access</th>
					<th class="profiles-th">
						<span class="profiles-bulk">No Access</span>
					</th>
					<th class="profiles-th">
						<span class="profiles-bulk">Read Only</span>
					</th>
					<th class="profiles-th">
						<span class="profiles-bulk">Draft</span>
					</th>
					<th class="profiles-th">
						<span class="profiles-bulk">Publish</span>
					</th>
				</tr>
				<tr class="profiles-tr">
					<td class="profiles-td">
						<img class="profile-avatar" src="https://si0.twimg.com/profile_images/1498899040/Sprout_TwitterAvatar.png">
						<p class="profile-name">Sprout Social</p>
						<p class="profile-handle"><i class="twitter-icon"></i>@SproutSocial</p>
					</td>
					<td class="profiles-td"><input class="no-access" type="radio" name="profile-1" value="0"></td>
					<td class="profiles-td"><input type="radio" name="profile-1" value="0"></td>
					<td class="profiles-td"><input type="radio" name="profile-1" value="0"></td>
					<td class="profiles-td"><input type="radio" name="profile-1" value="0" checked></td>
				</tr>
				<tr class="profiles-tr">
					<td class="profiles-td">
						<img class="profile-avatar" src="https://si0.twimg.com/profile_images/3060837393/a9d516657f9a77df64d194afb4183c6c_bigger.png">
						<p class="profile-name">Sprout Insights</p>
						<p class="profile-handle"><i class="twitter-icon"></i>@Sprout_Insights</p>
					</td>
					<td class="profiles-td"><input class="no-access" type="radio" name="profile-2" value="0" checked></td>
					<td class="profiles-td"><input type="radio" name="profile-2" value="0"></td>
					<td class="profiles-td"><input type="radio" name="profile-2" value="0"></td>
					<td class="profiles-td"><input type="radio" name="profile-2" value="0"></td>
				</tr>
				<tr class="profiles-tr disabled">
					<td class="profiles-td">
						<img class="profile-avatar" src="https://si0.twimg.com/profile_images/1591934500/2010-07-31_23.47.52.png">
						<p class="profile-name">Justyn Howard</p>
						<p class="profile-handle"><i class="twitter-icon"></i>@justyn</p>
					</td>
					<td class="profiles-td"><input class="no-access" type="radio" name="profile-3" value="0" checked></td>
					<td class="profiles-td"><input type="radio" name="profile-3" value="0"></td>
					<td class="profiles-td"><input type="radio" name="profile-3" value="0"></td>
					<td class="profiles-td"><input type="radio" name="profile-3" value="0"></td>
				</tr>
				<tr class="profiles-tr disabled">
					<td class="profiles-td">
						<img class="profile-avatar" src="https://si0.twimg.com/profile_images/1689721176/Caro-Support_bigger.png">
						<p class="profile-name">Sprout Support</p>
						<p class="profile-handle"><i class="twitter-icon"></i>@SproutSupport</p>
					</td>
					<td class="profiles-td"><input class="no-access" type="radio" name="profile-4" value="0" checked></td>
					<td class="profiles-td"><input type="radio" name="profile-4" value="0"></td>
					<td class="profiles-td"><input type="radio" name="profile-4" value="0"></td>
					<td class="profiles-td"><input type="radio" name="profile-4" value="0"></td>
				</tr>
			</table>
		</div>
		<div class="modal-footer">
			<p class="modal-message">Your billing will be adjusted to reflect additional users at $99/mo</p>
			<div class="modal-actions">
				<a class="modal-dismiss js-dismiss">Cancel</a>
				<a class="modal-submit js-send">Send Invite</a>
			</div>
		</div>
	</div>
</div>
