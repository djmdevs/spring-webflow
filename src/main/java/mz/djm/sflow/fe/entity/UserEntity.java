package mz.djm.sflow.fe.entity;

/**
 * 
 * @author Danilo Jo
 *
 */
public class UserEntity {

	private Long id;
	private String username;
	private String fullname;
	
	public UserEntity(Long id) {
		this.id = id;
	}
	
	
	public UserEntity(Long id, String username) {
		this(id);
		this.username = username;
	}


	public Long getId() {
		return id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	
	
}
